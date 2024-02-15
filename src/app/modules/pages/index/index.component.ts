import { ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { IsLoadingService } from '../../../../core/services/router/Isloading';
import { Observable, filter } from 'rxjs';

@Component({
  selector: 'learnal-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent {
  isLoading!: Observable<boolean>;

  constructor(
    private isLoadingService: IsLoadingService,
    private router: Router,
    private alert: ToastrService
  ) {}

  ngOnInit(): void {
    this.isLoading = this.isLoadingService.isLoading$();

    this.router.events
      .pipe(
        filter(
          (event) =>
            event instanceof NavigationStart ||
            event instanceof NavigationEnd ||
            event instanceof NavigationCancel ||
            event instanceof NavigationError
        )
      )
      .subscribe((event) => {
        // If it's the start of navigation, `add()` a loading indicator
        if (event instanceof NavigationStart) {
          this.isLoadingService.add();
          return;
        }

        if (event instanceof NavigationCancel) {
          // return;
        }

        if (event instanceof NavigationError) {
          this.alert.info(
            'Something happened while performing the navigation, please refresh the page.',
            'Page navigation error.'
          );
          return;
        }

        // Else navigation has ended, so `remove()` a loading indicator
        this.isLoadingService.remove();
      });
  }
}
