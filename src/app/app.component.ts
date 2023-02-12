import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyDialogComponent } from './my-dialog/my-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    // ダイアログを開く※引数を渡すことも可
    const dialogRef = this.dialog.open(MyDialogComponent, {
      data: { text: 'データを更新' },
    });

    // ダイアログが閉じたら受け取る
    dialogRef.afterClosed().subscribe((result) => {
      console.log('ダイアログが閉じられました', result);
      if (result) {
        console.log('OKが押されました');
      } else {
        // resultはundefined
        console.log('キャンセルが押されました');
      }
    });
  }
}
