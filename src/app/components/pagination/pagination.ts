import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator'; 
import { MatTableModule } from '@angular/material/table';       

@Component({
  selector: 'app-pagination',
  imports: [MatTableModule, MatPaginatorModule, CommonModule],
  templateUrl: './pagination.html',
  styleUrl: './pagination.css',
})
export class Pagination {
  @Input({required: true}) length!:number;
  @Input({required: true}) pageIndex!:number;
  
  // notify parent 
  @Output() pageChange = new EventEmitter<PageEvent>();
  handlePageEvent(event: PageEvent) {
    this.pageChange.emit(event);
  }
}
