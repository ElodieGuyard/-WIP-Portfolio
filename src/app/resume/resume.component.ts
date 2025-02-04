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

  generatePDF(){
    const elementToPrint = document.getElementById('contentToConvert');
    
    if (elementToPrint) {
    html2canvas(elementToPrint, { scale: 2}).then((canva)=> {
      const pdf = new jsPDF();
      pdf.addImage(canva.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);

      pdf.setProperties({
        title:'Resume Elodie Guyard',
        author:'ElodieGuyard'
      });

      pdf.setFontSize(11);
      pdf.save('ResumeElodieGuyard.pdf');
    })
  }
  }
}
