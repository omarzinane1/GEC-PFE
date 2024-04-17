import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  imageUrl: string = 'assets/images/gclogo.png';

  Menus = [
    {
      icon : 'fa-house',
      title: 'Accueil',
    },
    {
      icon : 'fa-users',
      title: 'List Clients',
    },
    {
      icon : 'fa-money-check-dollar',
      title: 'List Chéques',
    },

    {
      icon : 'fa-id-card',
      title: 'profile',
    },
    {
      icon : 'fa-right-from-bracket',
      title: 'Se déconnecter',
    },
  ];
  sidebarVisible = true;
  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
