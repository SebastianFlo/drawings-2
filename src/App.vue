<template>
    <div id="app">
        <Navigation/>
        <router-view/>

    <!--
        <footer id="footer" class="footer">
            <div class="col-md-4 col-md-offset-4">
                <a target="_blank"
                    class="col-md-2 col-md-offset-4"
                    href="http://www.facebook.com/cosmicjs">
                    <i class="fa fa-facebook-official"></i>
                </a>
                <a target="_blank"
                    class="col-md-2"
                    href="http://www.twitter.com/cosmic_js">
                    <i class="fa fa-twitter-square"></i>
                </a>
            </div>
        </footer>
    -->
    </div>
</template>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #c3c3c3;
    }

    .footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 60px;
        line-height: 60px;
    }
</style>