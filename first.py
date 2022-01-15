class first:
	def first(self,size,x,y):
		self.size = size
		while True:
			if len(self)==0:
				# DEBUG: print(1)
				for i in range(size):
					self.append(list(' ' * size))
			else:
				# DEBUG: print(2)
				for i in range(size):
					self[i]=list(' ' * size)
			for i in range(int(size*size/6.4)):
				self.xInit()
			self.num_init()
			if self[int(x)][int(y)]==' ':
				# DEBUG: print(3)
				break
			else:
				# DEBUG: print(4)
				pass
		return str(self)
