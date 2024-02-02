import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { SignUpDto } from '../../../../core/services/auth/Dto/signup.dto';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { AppState } from '../../../../core/state/app/app.state';
import * as authAction from '../../../../core/state/auth/auth.action';
import * as authSelector from '../../../../core/state/auth/auth.selector';
import { ToastrService } from 'ngx-toastr';

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
  isOpen: boolean = false;
  regForm: FormGroup = new FormGroup(
    {
      userName: new FormControl('', Validators.required),
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

  isLoading$ = this.store.select(authSelector.getLoading);
  errorMessage$ = this.store.select(authSelector.getErrorMessage);

  constructor(
    private store: Store<AppState>,
    private authService: AuthService,
    private alert: ToastrService
  ) {}

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

  loadImageFailed(): void {
    this.alert.info(
      `Only image with maximum size: 5mb is supported.`,
      'Image upload failed.'
    );
  }

  onSubmit(): void {
    if (!this.regForm.valid) {
      this.alert.error('All the input is required.', 'Invalid Model State.');
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
      authAction.RegistrationRequest({ formData: formData, email: model.email })
    );
  }
}
