import React from "react";
import './navbar.css';
function NavigationBar({ color }) {
  return (
        <nav id="navbar" >
            <div id="navbar-center">       
                <a href="{% url 'account:logout_user' %}">Logout</a>
                <a type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal">Ganti Password</a>
                <a href="{% url 'main:show_main' %}">Lihat buku</a>
                <a href="{% url 'account:view_rank_book' %}">Ranking Buku Pernah Dipinjam</a>    
                <a href="{% url 'account:view_history_book' %}">Riwayat Buku Pernah Dipinjam</a>    
                <a href="{% url 'reviews:my_reviews' %}">Review Saya</a>
                <a href="/bookmarks/bookmarks">Bookmark Saya</a>
                <a href="{% url 'collection:my_collections' %}">Collection</a>                  
            </div>
        </nav>
  );
}
export default NavigationBar;
