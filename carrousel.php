<?php 
/**
 * Plugin Name: Carrousel
 * Author: Christopher Simeus
 * Description: Affiche le carrousel associé a une galerie de WordPress
 * Version: 1.0.0
 * Plugin URL: https://github.com/ChristopherRedZ/
 */

function enqueue_style_script(){

    $version_css = filemtime(plugin_dir_path( __FILE__ ) . "style.css");
    $version_js = filemtime(plugin_dir_path(__FILE__) . "js/carrousel.js");

    wp_enqueue_style(   'em_plugin_carrousel_css',
                     plugin_dir_url(__FILE__) . "style.css",
                     array(),
                     $version_css);

    wp_enqueue_script(  'em_plugin_carrousel_js',
                    plugin_dir_url(__FILE__) ."js/carrousel.js",
                    array(),
                    $version_js,
                    true);
}
//faut ajouter wp_head() et wp_footer()

add_action('wp_enqueue_scripts','enqueue_style_script');



 function genere_html(){

    
   $html = '<button class="bouton__ouvrir">Ouvrir Carrousel</button>
   <div class="carrousel">
    <button href="" class="carrousel__x">X</button>
    <figure class="carrousel__figure"></figure>
    <form action="" class="carrousel__form"></form>
   </div>
   ';
   return $html;
}
//[carrousel] juste apres la galerie dans notre article ou page
//quand la fonction the_content() rencontrera [carrousel] c'est a ce moment que le carroussel sera initialiser
add_shortcode('carrousel' , 'genere_html');
