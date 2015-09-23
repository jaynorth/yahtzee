<!doctype html>
<html lang="eng">
<?php 
include "Classes/objects.php";

?>

<head>
<meta charset="utf-8" />
<title>Yahtzee Project OOP</title>
<link href= rel='stylesheet' type='text/css'>
</head>

<body>
<h1>Yahtzee Project</h1>
<div style="float:left;"	>


	<?php 
		

		if (!isset($_POST['submit'])){

			echo "<h2>You need to throw the dice</h2>";
			$counter = 0;
			echo "Counter is $counter<br />";
			//$results = array();	
			$dice1=NULL;
			$dice2=NULL;
			$dice3=NULL;
			$dice4=NULL;
			$dice5=NULL;

		}
		else{
			$counter = $_POST['counter'];
			$counter ++;
			echo "Counter is $counter<br />";

			

			echo "<h2>Throw Number $counter !!</h2>";
			
		
	
			if (isset($_POST['dice1'])){ 
				$dice1= $_POST['dice1'];
			} else {
				$dice1 = mt_rand (1, 6);
			}
			if (isset($_POST['dice2'])){ 
				$dice2= $_POST['dice2'];
			} else {
				$dice2 = mt_rand (1, 6);
			}
			if (isset($_POST['dice3'])){ 
				$dice3= $_POST['dice3'];
			} else {
				$dice3 = mt_rand (1, 6);
			}
			if (isset($_POST['dice4'])){ 
				$dice4= $_POST['dice4'];
			} else {
				$dice4 = mt_rand (1, 6);
			}
			if (isset($_POST['dice5'])){ 
				$dice5= $_POST['dice5'];
			} else {
				$dice5 = mt_rand (1, 6);
			}
		
		}
			
	?>		
		<form action="index.php" method ="post">

			<b>Dice1:</b><?php echo $dice1 ?>
			 <input type="checkbox" name="dice1" value="<?php echo $dice1; ?>" <?php if (isset($_POST['dice1'])){echo "checked";} ?> > Keep?<br/>
			<b>Dice2:</b><?php echo $dice2 ?>
			<input type="checkbox" name="dice2" value="<?php echo $dice2; ?>" <?php if (isset($_POST['dice2'])){echo "checked";} ?>> Keep?<br/>
			<b>Dice3:</b><?php echo $dice3 ?>
			<input type="checkbox" name="dice3" value="<?php echo $dice3; ?>" <?php if (isset($_POST['dice3'])){echo "checked";} ?>> Keep?<br/>
			<b>Dice4:</b><?php echo $dice4 ?>
			<input type="checkbox" name="dice4" value="<?php echo $dice4; ?>" <?php if (isset($_POST['dice4'])){echo "checked";} ?>> Keep?<br/>
			<b>Dice5:</b><?php echo $dice5 ?>
			<input type="checkbox" name="dice5" value="<?php echo $dice5; ?>" <?php if (isset($_POST['dice5'])){echo "checked";} ?>> Keep?<br/>
			
		

	<?php

	$results = [ 
	"Dice1" => $dice1,
	"Dice2" => $dice2,
	"Dice3" => $dice3,
	"Dice4" => $dice4,
	"Dice5" => $dice5,
	];
	

	#############################################################################################
	###### CHECKING RESULTS 
	#############################################################################################
	
	$sorted = sort($results);
	//print_r($results);
	if (count($results)==5){

		$straight = 0;

		for ($i=0; $i<=3; $i++){
			if ($results[$i]+1 == $results[$i+1]){
				$straight++;
			}else {
				break;
			}
		}
	}
	if (count(array_unique($results))>=4){

		$straight = 0;
		if (count(array_unique($results))>4){

			$x = 3;
		}else{
			$x=2;
		}

		for ($i=0; $i<=$x; $i++){
			$noduplicate = array_unique($results);
			sort($noduplicate);
			if ($noduplicate[$i]+1 == $noduplicate[$i+1]){
				$straight++;
			}
		}
	}
	if ($straight == 4){

		echo "big straight !!!!!!!!!!!!!!!";
	}elseif ($straight == 3 && (in_array(3, $results))){ //if 3 is not in then 1, 2, 4, 5, 6 would be considered a small straight
		echo "small straight !";
	}	

	$datas = array_count_values($results);

	if (in_array(2, $datas) && in_array(3, $datas) ){

		echo "FULL HOUSE!<br />";
	}
	$chance = array_sum($results);
	echo "<br />CHANCE total = $chance<br/>";

	foreach ($datas as $key => $data ){

		switch ($data) {
			case '1':
			echo "One $key<br/>";
			break;

			case '2':
			echo "Pair of $key<br/>";
			break;

			case '3':
			echo "$key, Three of a kind<br/>";
			break;

			case  '4':
			echo "$key, Four of a kind<br/>";
			break;

			case  '5':
			echo "YAHTZEEEEEEEEEEEE!!!!!!!! of $key<br/>";
			echo "or five $key<br/>";
			break;
		}

	}
#####################################################################################3

	
	?>

		<p>CLICK on the Button below to throw the dice</p>
		<input type="hidden" name ="counter" value="<?php echo $counter; ?>">
		<input type="submit" name ="submit" value="Roll">
</form>
</div>

<table border=1 style="float:left;">
	<tr>
		<td>UPPER SECTION</td><td>HOW TO SCORE</td><td>score</td>		
	</tr>
	<tr>
		<td>ACE</td><td>COUNT and add</td><td></td><td></td>		
	</tr>
	<tr>
		<td>TWOs</td><td>COUNT and add</td><td></td><td></td>		
	</tr>
	<tr>
		<td>Threes</td><td>COUNT and add</td><td></td><td></td>		
	</tr>
	<tr>
		<td>Fours</td><td>COUNT and add</td><td></td><td></td>		
	</tr>
	<tr>
		<td>Fives</td><td>COUNT and add</td><td></td><td></td>		
	</tr>
	<tr>
		<td>Sixes</td><td>COUNT and add</td><td></td><td></td>		
	</tr>
	<tr>
		<td>BONUS</td><td>if total is 63 or over</td><td></td>		
	</tr>
	<tr>
		<td>Total of UPPER Section</td><td></td><td></td>		
	</tr>
	<tr>
		<td>LOWER SECTION</td><td></td><td></td>		
	</tr>
	<tr>
		<td>3 of a kind</td><td>Add Total of All Dice</td><td></td><td></td>		
	</tr>
	<tr>
		<td>4 of a kind</td><td>Add Total of All Dice</td><td></td><td></td>		
	</tr>
	<tr>
		<td>Full House</td><td>SCORE 25</td><td></td><td></td>		
	</tr>
	<tr>
		<td>Sm. Straight</td><td>SCORE 30</td><td></td><td></td>		
	</tr>
	<tr>
		<td>Lg Straight</td><td>SCORE 40</td><td></td><td></td>		
	</tr>
	<tr>
		<td>Yahtzee</td><td>SCORE 50</td><td></td><td></td>		
	</tr>
	<tr>
		<td>Chance</td><td>Add Total of All Dice</td><td></td><td></td>		
	</tr>
	<tr>
		<td>Total UPPER</td><td></td><td></td>		
	</tr>
	<tr>
		<td>Total LOWER</td><td></td><td></td>		
	</tr>
	<tr>
		<td>Grand Total</td><td></td><td></td>		
	</tr>

</table>

</body
></html>