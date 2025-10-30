import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SspGameService } from '../../services/ssp-game-service';

@Component({
  selector: 'app-stone-scissors-paper',
  imports: [CommonModule, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './stone-scissors-paper.html',
  styleUrl: './stone-scissors-paper.scss',
  standalone: true
})
export class StoneScissorsPaper {
  options = ['STONE', 'PAPER', 'SCISSORS'];
  playerMove : string = '';
  computerMove: string = '';
  result: string | null = null;
  loading = false;

  constructor(private sspService: SspGameService) {}

  play(move: string) {
    this.loading = true;
    this.sspService.play(move, 'RANDOM').subscribe({
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
