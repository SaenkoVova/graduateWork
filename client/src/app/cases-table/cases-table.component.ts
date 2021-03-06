import { AfterViewInit, Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { CasesTableDataSource, CasesTableItem } from './cases-table-datasource';
import {CaseService} from '../services/case.service';
import {NgProgressService} from '../services/ng-progress.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cases-table',
  templateUrl: './cases-table.component.html',
  styleUrls: ['./cases-table.component.scss']
})
export class CasesTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<CasesTableItem>;
  dataSource: CasesTableDataSource;
  @Output() passFondTitle = new EventEmitter

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'case_index', 'title', 'dates', 'page_quantity', 'notes'];
  fonds = [];
  length;
  pageSize = 10;
  pageIndex = 0;
  fondName = null;
  pageEvent: PageEvent;

  constructor(
    private caseService: CaseService,
    private ngProgressService: NgProgressService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.getFonds(this.pageSize, this.pageIndex);
  }

  getFonds(pageSize, pageIndex) {
    this.ngProgressService.ngProgressComplete();
    this.ngProgressService.ngProgressStart();
    const fondId = this.route.snapshot.params.id;
    this.caseService.getCases(pageSize, pageIndex, fondId)
      .subscribe(data => {
        this.dataSource = new CasesTableDataSource(data.array);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
        this.length = data.length;
        this.fondName = data.fondName;
        this.passFondTitle.emit(this.fondName)
        this.ngProgressService.ngProgressComplete();
      });
  }
  togglePage(event): PageEvent {
    this.dataSource = null;
    this.getFonds(event.pageSize, event.pageIndex);
    return;
  }

  ngAfterViewInit(): void {
  }
}
