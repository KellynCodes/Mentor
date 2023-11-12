import { Component, HostListener, Inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { SignUpDto } from '../../../services/auth/Dto/signup.dto';
import { AuthService } from '../../../services/auth/auth.service';
import { AppState } from '../../../state/app/app.state';
import * as signUpActions from '../state/signup/signup.action';
import * as selectSignUpStates from '../state/signup/signup.selector';

@Component({
  selector: 'learnal-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  IsRememberMe: boolean = false;
  userImgPath!: string;
  imagePreviewLink: string | null = null;
  file!: File;
  croppedFile!: Blob;
  imageChangedEvent!: Event;
  hidePassword!: boolean;
  regForm!: FormGroup;
  isOpen: boolean = false;

  // signup
  isSigningUp$ = this.store.select(selectSignUpStates.getSignUpIsLoading);
  errorMessage$ = this.store.select(selectSignUpStates.getSignUpMessage);

  constructor(
    private store: Store<AppState>,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.regForm = new FormGroup(
      {
        username: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          this.authService.passwordValidator(),
        ]),
        confirmPassword: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
        ]),
      },
      { validators: this.authService.mustMatch('password', 'confirmPassword') }
    );
  }

  toggleModal(): void {
    this.isOpen = !this.isOpen;
  }

  controlHasError(control: string, errorName: string): boolean | undefined {
    if (!this.regForm.dirty) {
      return;
    }
    return (
      this.regForm?.get(control)?.touched &&
      this.regForm?.get(control)?.hasError(errorName)
    );
  }
  toggleChoice(): void {
    this.IsRememberMe = !this.IsRememberMe;
  }

  onFileSelect(event: Event): void {
    this.imageChangedEvent = event;
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.file = input.files[0];
    }
  }

  cropImage(event: ImageCroppedEvent): void {
    this.croppedFile = event.blob!;
    this.imagePreviewLink = event.objectUrl!;
  }

  loadImage(): void {}

  initCropper(): void {}

  loadImageFailed(): void {}

  onSubmit(): void {
    if (!this.regForm.valid) {
      return;
    }

    const model: SignUpDto = {
      ...this.regForm.value,
    };
    const formData: FormData = new FormData();
    formData.append('email', model.email);
    formData.append('userName', model.userName);
    formData.append('password', model.password);
    formData.append('confirmPassword', model.confirmPassword);
    if (this.croppedFile != null) {
      formData.append('profileImage', this.croppedFile, this.file?.name);
    }

    this.store.dispatch(
      signUpActions.RegistrationFired({
        message: null,
        isSuccessful: false,
        data: { IsLoading: true },
      })
    );
    this.store.dispatch(signUpActions.RegistrationRequest({ file: formData }));
  }
}
