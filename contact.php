
<?php 	
	
include('dbcon.php');

if(isset($_POST['submit']))
{
    $name = mysqli_real_escape_string($con, $_POST['name']);
    $email = mysqli_real_escape_string($con,$_POST['email']);
    $mobile = mysqli_real_escape_string($con,$_POST['mobileno']);
	$message = mysqli_real_escape_string($con,$_POST['message']);
	
	$sql = "INSERT INTO contact( name, email, mobile, message) VALUES 
    ('$name','$email','$mobile','$message')";

		if ($con->query($sql) === TRUE) {
			?>
			<script>
				$('#submit').click(function(){
					Swal.fire({
						position: 'center',
						icon: 'success',
						title: 'Data Inserted Sucessfully...',
						showConfirmButton: false,
						timer: 2000
						})
				});
			</script>
			<?php
			header("Location: index.html");
			} else {
			echo "Error: " . $sql . "<br>" . $con->error;
		}
		$con->close();
	}
?>
		