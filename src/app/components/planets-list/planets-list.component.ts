import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PlanetsService} from '../../services/planets.service';
import {Planet} from '../../models/planet';
import {AppState} from '../../store/app.state';
import {Store} from '@ngrx/store';
import {AddPlanet, UpdateFilterChartsLength, UpdatePaginatorInfo} from '../../store/actions/planet.actions';
import {Router} from '@angular/router';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent implements OnInit {

  pageSize: number;
  allPlanets: Planet[];
  allPlanetsFromServer: Planet[];
  selectedPlanets: Planet[];
  chartsLength: number;
  @ViewChild('filter')
  PlanetsFilter: ElementRef;

  constructor(private planetsService: PlanetsService, private router: Router, private store: Store<AppState>) {
  }

  ngOnInit() {
    this.pageSize = 5;
    this.chartsLength = 1;
    this.getAllPlanetsFromServer();
  }

  getAllPlanetsFromServer(): void {
    this.planetsService.getAllPlanets().subscribe(data => {
      this.allPlanetsFromServer = data.results;
      this.reAssignPlanets();
    });
  }

  reAssignPlanets(): void {
    this.allPlanets = this.allPlanetsFromServer;
    this.getSelectedPlanets(0, this.pageSize);
  }

  getSelectedPlanets(firstIndex: number, lastIndex: number): void {
    if (this.allPlanets) {
      this.selectedPlanets = this.allPlanets.slice(firstIndex, lastIndex);
    }
  }

  getNext(page): void {
    const itemsByPage = page.pageIndex * page.pageSize;
    this.pageSize = itemsByPage + page.pageSize;
    this.getSelectedPlanets(itemsByPage, this.pageSize);
    this.store.dispatch(new UpdatePaginatorInfo(page));
  }

  filterPlanets(e): void {
    if (e.target.value.length >= this.chartsLength) {
      this.planetsService.getPlanetByName(e.target.value).subscribe(data => {
        this.allPlanets = data.results;
        this.getSelectedPlanets(0, this.pageSize);
      });
    } else if (e.target.value.length < this.chartsLength) {
      this.reAssignPlanets();
    }
  }

  changeChartLength(e): void {
    this.chartsLength = e.value;
    this.PlanetsFilter.nativeElement.value = '';
    this.reAssignPlanets();
    this.store.dispatch(new UpdateFilterChartsLength(e.value));
  }

  planetClicked(name: string): void {
    this.router.navigate(['/planets', name]);
    this.store.dispatch(new AddPlanet(name));
  }
}
