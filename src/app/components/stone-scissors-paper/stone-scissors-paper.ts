import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-stone-scissors-paper',
  imports: [CommonModule, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './stone-scissors-paper.html',
  styleUrl: './stone-scissors-paper.scss',
  standalone: true
})
export class StoneScissorsPaper {
  options = ['Stone', 'Paper', 'Scissors'];
  playerChoice: string | null = null;
  computerChoice: string | null = null;
  result: string | null = null;
  loading = false;

  constructor() {}

  play(choice: string) {
    this.loading = true;
  }

  reset() {
    this.playerChoice = null;
    this.computerChoice = null;
    this.result = null;
  }

}
