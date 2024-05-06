"""
for i in range(1,20,2): 
  print(i)                
"""

#for i in range(0,11):
#    print("5 X",i,"=",5*i)

contador = int
valor = int
dobro = int

m = int(input("Digite a quantidade de valores a ler:"))

for contador in range(1,m):
    print("Digite o valor a calcular o dobro:")
    valor =int (input())
    dobro = valor*2

    print("O dobro de",valor,"é",dobro)
