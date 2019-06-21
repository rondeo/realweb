<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<title>Realweb - интернет провайдер</title>

	<meta name="description" content="">
	
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	
	
	<?php wp_head(); ?>
	
	<script type="text/javascript">
		let homeUrl = "http://localhost:3000";
	</script>

</head>
<body>

	
<!-- Верхнее меню -->
<?php get_template_part( "template-parts/pages-parts/top-menu" ) ?>
<!-- END Верхнее меню -->

<!-- Верхнее попапменю физлица -->
<?php get_template_part( "template-parts/pages-parts/top-submenu-fzl-popup" ) ?>
<!-- END Верхнее попапменю физлица -->

<div class="pageContainer">



<!-- Верхнее подменю физлица -->
<?php get_template_part( "template-parts/pages-parts/top-submenu-fzl" ) ?>
<!-- END Верхнее подменю физлица -->
