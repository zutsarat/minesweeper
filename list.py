from num_init import num_init
from first import first
from min_init import xInit
from reset import reset

class gameSession(list, num_init, xInit, first, reset):
	def __str__(self):
		str = ''
		for i in self:
			# DEBUG: print(1)
			for j in i:
				# DEBUG: print(2)
				str += j
			if not(i==len(self)):
				str += '\n'
		return str
