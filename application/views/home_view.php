<html>
<head>
	<title>Google authentication library for codeigniter</title>
  <!-- Compiled and minified CSS -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.96.1/css/materialize.min.css">
  <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">

  <!-- Compiled and minified JavaScript -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script> 
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.96.1/js/materialize.min.js"></script>
          
</head>
<body>
	
	<div align="center">
		<h2>Google authentication library for Codeigniter</h2>
	</div>
	<div class="container">
		<div class="row">	
			<div class="col s12 m6 offset-m3 l6 offset-l3">
			<a href="<?=$google_login_url?>"class="waves-effect waves-light btn red"><i class="fa fa-google left"></i>Google login</a>
					<a href=<?php echo base_url("auth/logout")?> class="waves-effect waves-light btn red"><i class="fa fa-google left"></i>Google logout</a>
				
			</div>
		</div>
		<div class="row">	

			<?php if(isset($_SESSION['name'])){?>
				<div class="col s12 m6 l4">
					<div class="card ">
			            <div class="card-image">
			              <img src="<?=$_SESSION['profile_pic']?>">
			              <span class="card-title"><?=$_SESSION['name']?></span>
			            </div>
			            <div class="card-action">
			              <a href="#"><?=$_SESSION['name']?></a>
			            </div>
			        </div>
				</div>
			<?php }?>
		</div>
	</div>

</body>
</html>