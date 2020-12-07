import { Component, OnInit } from '@angular/core';
import { GitHubServiceService } from 'src/app/service/git-hub-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
	constructor(
		private services: GitHubServiceService,
		private router: Router,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		localStorage.clear();
	}

	get(username: string) {
		this.services.getUsers(username).subscribe(
			(users) => {
				localStorage.setItem('user', JSON.stringify(users));
				localStorage.setItem('username', username);
				this.router.navigate(['details']);
			},
			(error) => {
				this.router.navigate(['not-found']);
				localStorage.removeItem('user');
			}
		);
		this.services.getRepos(username).subscribe((repos) => {
			localStorage.setItem('repos', JSON.stringify(repos));
			this.router.navigate(['details']);
		});
	}
}
