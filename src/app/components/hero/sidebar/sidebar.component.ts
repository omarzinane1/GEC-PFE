import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  imageUrl: string = 'assets/images/gclogo.png';

  Menus = [
    {
      icon: 'fa-house',
      title: 'Accueil',
    },
    {
      icon: 'fa-users',
      title: 'List Clients',
    },
    {
      icon: 'fa-money-check-dollar',
      title: 'List Chéques',
    },

    {
      icon: 'fa-id-card',
      title: 'profile',
    },
    {
      icon: 'fa-right-from-bracket',
      title: 'Se déconnecter',
    },
  ];
  sidebarVisible = true;
  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
