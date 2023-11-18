import { useState} from 'react'
import './App.css'

function App() {
  return (
    <div class="cards bg-danger fs-6">
     
          <div class="card bg-white m-4">
               <h6>free</h6>
               <h3 class="card-title">$0/month</h3>
               <hr />
               <div class="card-body"> 
               <ul>
                <li class="text-start">Single User</li>
                <li class="text-start">5GB Storage</li>
                <li class="text-start">Unlimited Public Projects</li>
                <li class="text-start">Community Access</li>
                <li class="text-start text-decoration-line-through fw-light">Unlimited Private Projects</li>
                <li class="text-start text-decoration-line-through fw-light">Dedicated Phone Support </li>
                <li class="text-start text-decoration-line-through fw-light">Free Subdomain </li>
                <li class="text-start text-decoration-line-through fw-light">Monthly Status Reports</li>
              </ul>
               </div>
               <button class="bg-info">button</button>
          </div>
          <div class="card bg-white m-4"> 
            <h6>PLUS</h6>
            <h3>$9/month</h3>
            <hr />
            <div class="card-body"> 
               <ul>
                <li class="text-start">5 User</li>
                <li class="text-start">5GB Storage</li>
                <li class="text-start">Unlimited Public Projects</li>
                <li class="text-start">Community Access</li>
                <li class="text-start">Unlimited Private Projects</li>
                <li class="text-start">Dedicated Phone Support </li>
                <li class="text-start">Free Subdomain </li>
                <li class="text-start text-decoration-line-through fw-light">Monthly Status Reports</li>
              </ul>
               </div>
            <button class="bg-info">button</button>
          </div>
           <div class="card bg-white m-4">
            <h6>PRO</h6>
            <h3>$49/month</h3>
            <hr />           
                <div class="card-body"> 
               <ul>
                <li class="text-start">Unlimited User</li>
                <li class="text-start">5GB Storage</li>
                <li class="text-start">Unlimited Public Projects</li>   
               <li class="text-start">Community Access</li>
                <li class="text-start">Unlimited Private Projects</li>
                <li class="text-start">Dedicated Phone Support </li>
                <li class="text-start">Free Subdomain </li>
                <li class="text-start">Monthly Status Reports</li>
              </ul>
               </div>

            <button class="bg-primary">button</button>
           </div>
  
    </div>
  )
}

export default App
