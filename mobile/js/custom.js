function render_ss() {
   var visible = $('#iphone').css('display');

   if (visible != 'none')
   {
      var html = '';
      for (var i = 1; i <= 4; i++)
         html = html+'<div class="showcase-slide"><img src="img/screenshots/'+i+'.png" /></div>';

      $('#showcase').html(html);
     
      $(document).ready(function()
      {
         $("#showcase").awShowcase(
         {
            content_width:       320,
            content_height:      480,
            fit_to_parent:       false,
            auto:                true,
            interval:            3000,
            continuous:          true,
            loading:             true,
            tooltip_width:       200,
            tooltip_icon_width:  32,
            tooltip_icon_height: 32,
            tooltip_offsetx:     18,
            tooltip_offsety:     0,
            arrows:              false,
            buttons:             false,
            btn_numbers:         true,
            keybord_keys:        true,
            mousetrace:          false,
            pauseonover:         true,
            stoponclick:         false,
            transition:          'hslide',
            transition_delay:    0,
            transition_speed:    500,
            show_caption:        'onload',
            thumbnails:          false,
            thumbnails_position: 'outside-last',
            thumbnails_direction:'vertical',
            thumbnails_slidex:   1,
            dynamic_height:      false,
            speed_change:        true,
            viewline:            false,
            custom_function:     null
         });
      });
   }
}

function getUrlVars()
{
   var vars = [], hash;
   var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
   
   for (var i = 0; i < hashes.length; i++)
   {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
   }

   return vars;
}

var url_vars = getUrlVars();

if (url_vars.output != undefined)
{
   url_vars = decodeURIComponent(url_vars.output); // decodes from URL
   url_vars = jQuery.parseJSON(url_vars); // decodes JSON array

   if (url_vars.success != undefined)
   {
      $('#form_message').html(url_vars.success);
   }
}
