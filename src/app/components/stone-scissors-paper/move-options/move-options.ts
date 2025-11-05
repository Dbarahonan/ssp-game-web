import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-move-options',
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './move-options.html',
  styleUrl: './move-options.scss'
})
export class MoveOptions {
  @Input() selectedOption: any;
  @Output() selectedOptionChange = new EventEmitter<'STONE' | 'PAPER' | 'SCISSORS'>();

  options = [
    { name: 'STONE', icon: 'landscape' },
    { name: 'PAPER', icon: 'description' },
    { name: 'SCISSORS', icon: 'content_cut' }
  ];

  selectOption(option: any) {
    this.selectedOptionChange.emit(option);
  }
}
