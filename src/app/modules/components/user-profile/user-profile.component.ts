import { UserService } from './../../../../core/services/user/user.service';
import { Component, Input } from '@angular/core';
import { UserResponseDto } from '../../../../core/services/user/Dto/user.dto';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'learnal-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  user: UserResponseDto | null;
  @Input({ required: true }) userId: string = '';
  @Input({ required: true }) buttonLabel: string = '';
  @Input() className: string = '';

  constructor(private userService: UserService) {
    this.user = userService.getUser(this.userId);
  }

  ngOnInit(): void {
    initFlowbite();
  }
}
