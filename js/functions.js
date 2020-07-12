function myFunction() {
  var x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
    
  }

  const [red, green, blue] = [69, 111, 225]
  const section1 = document.querySelector('.navbar')
  var x = document.getElementById("myTopnav");
  window.addEventListener('scroll', () => {
    if (window.pageYOffset === 0){
      section1.style.backgroundColor = `transparent`
    }
    else{
      let y = 1 + (window.scrollY || window.pageYOffset) / 150
      y = y < 1 ? 1 : y // ensure y is always >= 1 (due to Safari's elastic scroll)
      const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
      section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    }
    
  })

 