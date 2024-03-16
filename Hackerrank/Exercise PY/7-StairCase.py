#  Criar uma escada com #
#  Esta escada tem tamanho e base = n
#  Temos que imprimir uma escada ao final da função, como por exemplo:
#        #
#       ##
#      ###
#     ####
#    #####

#  EXEMPLO:
#  n = 6
#       #
#      ##
#     ###
#    ####
#   #####
#  ######


def StairCase(n):
  height = n;
  hashString = '';

  for i in range(1, height + 1):
    for j in range(1, height - i + 1 ):
      hashString += " ";
    
    for k in range(1, i + 1):
      hashString += "#";

    hashString += '\n';

  print(hashString);


n = 6;
StairCase(n);