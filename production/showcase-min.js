var i,acc=document.getElementsByClassName("img__tile--primary");for(i=0;i<acc.length;i++)acc[i].addEventListener("click",function(){this.classList.toggle("active");var i=this.nextElementSibling;"block"===i.style.display?i.style.display="none":i.style.display="block"});$(function(){$(".monster").fadeIn("slow")}),$(document).ready(function(){$(window).scroll(function(){console.log("moose"),$(".reveal").each(function(i){var t=$(this).position().top+$(this).outerHeight();$(window).scrollTop()+$(window).height()>t&&$(this).animate({opacity:"1"},1500)})})});