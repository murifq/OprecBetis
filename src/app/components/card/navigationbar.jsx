import React from "react";
import "./navbar.css";
function NavigationBar({ position }) {
  if (position == 0) {
    return (
      <nav id="navbar">
        <div id="navbar-center">
          <a href="/bookmarks/bookmarks" className="selected">
            Halaman Utama
          </a>
          <a href="{% url 'collection:my_collections' %}" className="option">
            Tambah Kapal
          </a>
        </div>
      </nav>
    );
  } else if (position == 1) {
    return (
      <nav id="navbar">
        <div id="navbar-center">
          <a href="/bookmarks/bookmarks" className="option">
            Halaman Utama
          </a>
          <a href="{% url 'collection:my_collections' %}" className="selected">
            Tambah Kapal
          </a>
        </div>
      </nav>
    );
  } else {
    return (
      <nav id="navbar">
        <div id="navbar-center">
          <a href="/bookmarks/bookmarks" className="option">
            Halaman Utama
          </a>
          <a href="{% url 'collection:my_collections' %}" className="option">
            Tambah Kapal
          </a>
        </div>
      </nav>
    );
  }
}
export default NavigationBar;
