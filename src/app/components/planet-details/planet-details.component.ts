import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PlanetsService} from '../../services/planets.service';
import {Planet} from '../../models/planet';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.scss']
})
export class PlanetDetailsComponent implements OnInit {

  planet: Planet;

  constructor(private activatedRoute: ActivatedRoute, private planetsService: PlanetsService) {
    this.activatedRoute.params.subscribe(params => {
      this.planetsService.getPlanetByName(params['name']).subscribe(planets => {
        this.planet = planets.results[0];
      });
    });
  }

  ngOnInit() {
  }

}
