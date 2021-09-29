<?php
function check_prime($num)
{
if ($num == 1)
return 0;
for ($i = 2; $i * $i <= $num; $i++)
{
if ($num % $i == 0)
return 0;
break;
}
return 1;
}

$num = readline('Enter the number: ');
$flag_val = check_prime($num);

if ($flag_val == 1)
echo "It is a prime number";
else
echo "It is a non-prime number"
?>