<!DOCTYPE HTML>
<!--
	Massively by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
@include('partials.head')
<body class="is-preload">

    <!-- Wrapper -->
    <div id="wrapper" class="fade-in">
        @include('partials.intro')
        @include('partials.header')
        @include('partials.navigation')
        @yield('content')
        @include('partials.footer')
        @include('partials.copy')
    </div>

    @include('partials.scripts')
</body>
</html>
