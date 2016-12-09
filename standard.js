//purechat insert

window.purechatApi = { l: [], t: [], on: function () { this.l.push(arguments); } }; (function () { var done = false; var script = document.createElement('script'); script.async = true; script.type = 'text/javascript'; script.src = 'https://app.purechat.com/VisitorWidget/WidgetScript'; document.getElementsByTagName('HEAD').item(0).appendChild(script); script.onreadystatechange = script.onload = function (e) { if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) { var w = new PCWidget({c: 'de8d031f-9b28-4d3b-8d7a-8baa0b993c1c', f: true }); done = true; } }; })();
//linkedin profile js

<script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
