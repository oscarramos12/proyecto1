import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './componentes/styles/menu.css';
import Home from './componentes/scripts/home.js';

export default function funcion() {
    return (
            <div>
                <nav class="site-header sticky-top py-1">
                <div class="container d-flex flex-column flex-md-row justify-content-between">
                <a class="py-2" path="#" aria-label="Razer">
                <img src="https://hybrismediaprod.blob.core.windows.net/sys-master-phoenix-images-container/h56/h3c/9163652366366/razer-ths-logo.svg" width="80" height="40" class="d-inline-block align-top" alt=""></img>
                </a>
                <a path="#" class="py-2 d-none d-md-inline-block" >PC</a>
                <a path="#" class="py-2 d-none d-md-inline-block" >Console</a>
                <a path="#" class="py-2 d-none d-md-inline-block" >Mobile</a>
                <a path="#" class="py-2 d-none d-md-inline-block" >Lifestyle</a>
                <a path="#" class="py-2 d-none d-md-inline-block" >Services</a>
                <a path="#" class="py-2 d-none d-md-inline-block" >Community</a>
                <a path="#" class="py-2 d-none d-md-inline-block" >Support</a>
                <a path="#" class="py-2 d-none d-md-inline-block" >                
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vector_search_icon.svg/945px-Vector_search_icon.svg.png" width="30" height="30" class="d-inline-block align-top" alt=""></img>
                </a>
                <a path="#" class="py-2 d-none d-md-inline-block" >                
                <img src="https://icons-for-free.com/iconfiles/png/512/add+to+cart+cart+shopping+cart+shopping+cart+icon+icon-1320073116171330767.png" width="30" height="30" class="d-inline-block align-top" alt=""></img>
                </a>


            </div>
        </nav>
        <Home></Home>
        </div>
    )
  }
  
