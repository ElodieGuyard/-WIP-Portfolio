import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-resume',
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {


    generatePDF(): void {
      const elementToPrint = document.getElementById('contentToConvert');
      if (!elementToPrint) return;
  
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.html(elementToPrint, {
        callback: function (pdf) {
          pdf.save('ResumeElodieGuyard.pdf');
        },
        x: 0,
        y: 0,
        html2canvas: {
          scale: 0.17 // Adjust the scale if needed
        }
      });
    }
}
