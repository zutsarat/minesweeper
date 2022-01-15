from random import randint as rand
class xInit():
	def xInit(self):
		size = self.size
		while True:
			x = rand(0,size-1)
			y = rand(0,size-1)
			if self[y][x] == ' ':
				self[y][x] = 'x'
				break
