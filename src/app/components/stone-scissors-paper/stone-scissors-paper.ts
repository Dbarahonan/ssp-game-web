import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SspGameService } from '../../services/ssp-game-service';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-stone-scissors-paper',
  imports: [CommonModule, MatButtonModule, MatCardModule, MatIconModule, FormsModule, MatTooltipModule, MatProgressSpinnerModule],
  templateUrl: './stone-scissors-paper.html',
  styleUrl: './stone-scissors-paper.scss',
  standalone: true
})
export class StoneScissorsPaper {
  options = [
    { name: 'STONE', icon: 'landscape' },
    { name: 'PAPER', icon: 'description' },
    { name: 'SCISSORS', icon: 'content_cut' }
  ];
  playerMove : string = '';
  computerMove: string = '';
  result: string | null = null;
  loading = false;
  opponentType: 'IA' | 'RANDOM' = 'RANDOM';

  constructor(private sspService: SspGameService) {}

  play(move: string) {
    this.loading = true;
    this.sspService.play(move, this.opponentType).subscribe({
      next: (res) => {
        this.playerMove = move;
        this.computerMove = res.computerMove;
        this.result = res.result;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      },
    });
  }

  reset() {
    this.playerMove = '';
    this.computerMove = '';
    this.result = null;
  }

}
