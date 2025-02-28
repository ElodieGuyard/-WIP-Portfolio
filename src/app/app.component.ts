import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { NavComponent } from "./nav/nav.component";
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'Guyard Elodie Portfolio';
  
  isDarkModebtnActive : boolean = false;
  isContrastModebtnActive : boolean = false;
  
  toggleDarkTheme() {
    
    const DarkModeBtn = document.getElementById("DarkThemeBtn");
    const ContrastThemeBtn = document.getElementById("ContrastThemeBtn");
    
    document.body.classList.toggle('dark-theme');
    
    if (DarkModeBtn) {
      if (DarkModeBtn.className === "active") 
        {
        DarkModeBtn.classList.remove("active");
        DarkModeBtn.classList.add("disabled");
        DarkModeBtn.innerHTML = "❌ Mode Sombre Désactivé";
      }
      else if (DarkModeBtn.className === "disabled"){
        DarkModeBtn.classList.remove("disabled");
        DarkModeBtn.classList.add("active");
        DarkModeBtn.innerHTML = "✅ Mode Sombre Activé";

        ContrastThemeBtn?.classList.add("disabled");
        ContrastThemeBtn?.classList.remove("active");
        if (ContrastThemeBtn) ContrastThemeBtn.innerHTML = "❌ Contrastes élevés désactivés";
        document.body.classList.remove("high-contrast");
      } 
    }
  }
  
  toggleHighContrast() {
    const ContrastThemeBtn = document.getElementById("ContrastThemeBtn");
    const DarkModeBtn = document.getElementById("DarkThemeBtn");
    
    document.body.classList.toggle('high-contrast');
  
      if (ContrastThemeBtn) {
        if (ContrastThemeBtn.className === "active") 
          {
            ContrastThemeBtn.classList.remove("active");
            ContrastThemeBtn.classList.add("disabled");
            ContrastThemeBtn.innerHTML = "❌ Contrastes élevés désactivés";
        }
        else if (ContrastThemeBtn.className === "disabled"){
          ContrastThemeBtn.classList.remove("disabled");
          ContrastThemeBtn.classList.add("active");
          ContrastThemeBtn.innerHTML = "✅ Contrastes élevés activés";

          DarkModeBtn?.classList.remove("active");
          DarkModeBtn?.classList.add("disabled");
          if (DarkModeBtn) DarkModeBtn.innerHTML = "❌ Mode Sombre Désactivé";
          document.body.classList.remove("dark-theme");
        } 
      }
  }

  pauseVid(){
    let vid = document.getElementById("backgroundVid");
    if (vid) (vid as HTMLMediaElement).pause();
  }
  
  constructor(@Inject(PLATFORM_ID) private platformId: any) {}
  
  ngOnInit() {
    
    // //Verify if the code is executed Client-Side and setup status of each buttons
    if (isPlatformBrowser(this.platformId)) {
      
      //Init vars of elems of the DOM : high contrast & dark mode 
      const DOMDarkModeBtn = document.getElementById("DarkThemeBtn");
      const DOMContrastModeBtn = document.getElementById("ContrastThemeBtn");
      
      //Verify if the prefered color scheme OS is dark or light
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-theme');
        this.isDarkModebtnActive = true;
        DOMDarkModeBtn?.classList.add("active");
        if (DOMDarkModeBtn) DOMDarkModeBtn.innerHTML = "✅ Mode sombre activé";
        DOMContrastModeBtn?.classList.add("disabled");
        if (DOMContrastModeBtn) DOMContrastModeBtn.innerHTML = "❌ Contrastes élevés désactivés";
      } else {
        //btns are disabled by default on first loading
        document.getElementById("DarkThemeBtn")?.classList.add("disabled");
        document.getElementById("ContrastThemeBtn")?.classList.add("disabled");
      }
    }
  }
  
}
