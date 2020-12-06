import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit(): void {}

	pictureUser = this.getAvatar();
	nameUser = this.getUser();
	userLogin = this.getLogin();
	userOrganization = this.getOrganization();
	userLocation = this.getUserLocation();
	userPublicRepos = this.getPublicRepos();
	userFollowers = this.getFollowers();

	getAvatar() {
		const perfilPicture = JSON.parse(localStorage.getItem('user') || '');

		const avatar_url = perfilPicture['avatar_url'];
		return avatar_url;
	}

	getUser() {
		const username = JSON.parse(localStorage.getItem('user') || '');

		const user = username['login'];
		return user;
	}

	getLogin() {
		const login = JSON.parse(localStorage.getItem('user') || '');

		const loginUser = login['name'];
		return loginUser;
	}

	getOrganization() {
		const organization = JSON.parse(localStorage.getItem('user') || '');

		const organizationUser = organization['company'];
		return organizationUser;
	}

	getUserLocation() {
		const location = JSON.parse(localStorage.getItem('user') || '');

		const locationUser = location['location'];
		return locationUser;
	}

	getPublicRepos() {
		const reposPublic = JSON.parse(localStorage.getItem('user') || '');

		const repos = reposPublic['public_repos'];
		return repos;
	}

	getFollowers() {
		const followers = JSON.parse(localStorage.getItem('user') || '');

		const followersUser = followers['followers'];
		return followersUser;
	}

	// funciones para obtener los datos de los repositorios
}
