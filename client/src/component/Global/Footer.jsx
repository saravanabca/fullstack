import React from 'react';
import "../../assets/css/footer.css"
import { Link } from 'react-router-dom';
export default function footer(){
    return(
         <>
        <footer class="footer">
				<div class="container">
					<div class="row align-items-center flex-row-reverse">
						<div class="col-md-12 col-sm-12 text-center">
							 Copyright © 2023 <Link to="#" className='main-color'>Simple Explore</Link>. Designed with <span class="fa fa-heart text-danger"></span> by <Link  className='footer-text-color' to="#"> TSK </Link> All rights reserved
						</div>
					</div>
				</div>
			</footer>
        </>
    );
}