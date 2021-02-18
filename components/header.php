<nav class="nav-wrapper container">
    <ul class="header-menu right hide-on-small-only" id="start">
        <li>
            <img src="assets\icons\icon-apple.png" alt="Apple Icon" srcset="">
            <img src="assets\icons\icon-android.png" alt="Android Icon" srcset="">
            <a href="" class="header-menu__links">
                baixe o app
            </a>
        </li>

    </ul>
    <ul class="header-menu right hide-on-small-only centeredLogo">
        <a href="#" class="brand-logo">
            <img alt="Logo Zoop" src="assets/images/logo.png" />
        </a>
    </ul>
    <ul class="header-menu right hide-on-small-only" id="end">
        <li>
            <a href="" class="header-menu__links">
                BENEFÍCIOS
            </a>
        </li>
        <li>
            <a href="" class="header-menu__links">
                AJUDA
            </a>
        </li>
    </ul>


    <ul class="header-menu hide-on-med-and-up id="start">
        <a href="#" class="brand-logo">
            <img alt="Logo Zoop" src="assets/images/logo.png" />
        </a>

    </ul>

    <a href="#" data-target="mobile-demo" class="sidenav-trigger hide-on-med-and-up" style="padding-right:10px;">
        <i class="material-icons white-text" style="color:white !important;">menu</i>
    </a>
</nav>




<ul class="sidenav" id="mobile-demo">
    <li>
        <a href="#" class="header-menu__links">
            link 1
        </a>
    </li>
    <li>
        <a href="#" class="header-menu__links">
            link 2
        </a>
    </li>
    <li>
        <a href="#" class="header-menu__links">
            link 3
        </a>
    </li>
    <li>
        <a href="google.com.br" target="_blank" class="header-menu__links">
            link 4
        </a>
    </li>
</ul>

<script type="text/javascript">
    window.addEventListener('load', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, {
            edge: 'right',
        });
    });
</script>