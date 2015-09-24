<!doctype html>
<html lang="eng">


<head>
<meta charset="utf-8" />
<title>Yahtzee Project OOP</title>
<link href="css/style.css" rel='stylesheet' type='text/css'>

</head>

<body onload="initElement(Identifiers);"> <!-- Why does onload need to be on body ??? -->
<h1>Yahtzee Project</h1>
<form>
	<input type="button" id="rollButton" value="Roll">
</form>



	<div id="content" class="float">
		<script src="js/yahtzee.js"></script>
	</div>
	<div id="analysis" class="float">
		<script src="js/analysis.js"></script>
	</div>
	<div class="score table" class="float"  >
	<script src="js/scoreTable.js"></script>

		<table border=1 class="float" >
	<tr>
		<td>UPPER SECTION</td><td>HOW TO SCORE</td><td>score</td>		
	</tr>
	<tr>
		<td>ACE</td><td>COUNT and add</td><td id="ace"> </td>		<div id="notice1"></div>
	</tr>
	<tr>
		<td>TWOs</td><td>COUNT and add</td><td id="twos"></td>	<div id="notice2"></div>	
	</tr>
	<tr>
		<td>Threes</td><td>COUNT and add</td><td id="threes"><div id="notice3"></div></td>		
	</tr>
	<tr>
		<td>Fours</td><td>COUNT and add</td><td  id="fours"><div id="notice4"></div></td>		
	</tr>
	<tr>
		<td>Fives</td><td>COUNT and add</td><td id="fives"><div id="notice5"></div></td>		
	</tr>
	<tr>
		<td>Sixes</td><td>COUNT and add</td><td id="sixes"><div id="notice6"></div></td>	
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
		<td>3 of a kind</td><td>Add Total of All Dice</td><td></td>		
	</tr>
	<tr>
		<td>4 of a kind</td><td>Add Total of All Dice</td><td></td>	
	</tr>
	<tr>
		<td>Full House</td><td>SCORE 25</td><td></td>	
	</tr>
	<tr>
		<td>Sm. Straight</td><td>SCORE 30</td><td></td>		
	</tr>
	<tr>
		<td>Lg Straight</td><td>SCORE 40</td><td></td>	
	</tr>
	<tr>
		<td>Yahtzee</td><td>SCORE 50</td><td></td>	
	</tr>
	<tr>
		<td>Chance</td><td>Add Total of All Dice</td><td></td>	
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

	</div>



</body
></html>