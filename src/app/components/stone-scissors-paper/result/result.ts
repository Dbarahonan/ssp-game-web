import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-result',
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './result.html',
  styleUrl: './result.scss'
})
export class Result {

  @Input() playerMove: string = '';
  @Input() computerMove: string = '';
  @Input() result: string | null = null;

  @Output() playAgain = new EventEmitter<void>();

  onPlayAgain(): void {
    this.playAgain.emit();
  }

}
