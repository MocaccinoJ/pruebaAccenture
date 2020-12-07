import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GitHubServiceService } from 'src/app/service/git-hub-service.service';

@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
	pictureUser = this.getAvatar();
	nameUser = this.getUser();
	userLogin = this.getLogin();
	userOrganization = this.getOrganization();
	userLocation = this.getUserLocation();
	userPublicRepos = this.getPublicRepos();
	userFollowers = this.getFollowers();
	repositories: {
		name: any;
		description: any;
		stargazers_count: any;
		html_url: any;
	}[] = [];
	username: any;

	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private services: GitHubServiceService
	) {}

	ngOnInit(): void {
		// this.activatedRoute.paramMap.subscribe((params: ParaMap) => {
		// 	this.username = params.get('usuario');
		// });
	}

	getAvatar() {
		const perfilPicture = JSON.parse(localStorage.getItem('user') || '');

		const avatar_url = perfilPicture['avatar_url'];
		return avatar_url;
	}

	getUser() {
		const username = JSON.parse(localStorage.getItem('user') || '');

		const user = username['name'];
		return user;
	}

	getLogin() {
		const login = JSON.parse(localStorage.getItem('user') || '');

		const loginUser = login['login'];
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
	allRepos = this.getRepos();

	getRepos() {
		const user1 = localStorage.getItem('username');
		this.services.getRepos(user1).subscribe((repos) => {
			this.repositories = this.createObject(repos).sort((a, b) => {
				return b.stargazers_count - a.stargazers_count;
			});
		});
	}

	createObject(
		repositories: {
			name: any;
			description: any;
			stargazers_count: any;
			html_url: any;
		}[]
	) {
		let repos: {
			name: any;
			description: any;
			stargazers_count: any;
			html_url: any;
		}[] = [];
		repositories.forEach((repo) => {
			let repoUser = {
				name: repo.name,
				description: repo.description,
				stargazers_count: repo.stargazers_count,
				html_url: repo.html_url,
			};
			repos.push(repoUser);
		});
		return repos;
	}
}
