class num_init:
	def num_init(pg):
		size = pg.size
		# NOTE: j - кордината х, i - кордината y
		for i in range(size):
			for j in range(size):
				if pg[i][j] != 'x':
					# NOTE: top
					if (not i) and not (j == 0 or j == size-1):
						pg[i][j] = str(
							(pg[i][j+1]=='x')+
							(pg[i+1][j+1]=='x')+
							(pg[i+1][j]=='x')+
							(pg[i+1][j-1]=='x')+
							(pg[i][j-1]=='x')
							)

					elif i == size-1 and not (j == 0 or j == size -1):
						# NOTE: bottom
						pg[i][j] = str(
						(pg[i-1][j-1]=='x')+
						(pg[i-1][j]=='x')+
						(pg[i-1][j+1]=='x')+
						(pg[i][j+1]=='x')
						)

					elif (not j) and i and not(i == size-1):
						# NOTE: left
						pg[i][j] = str(
							(pg[i-1][j]=='x')+
							(pg[i-1][j+1]=='x')+
							(pg[i][j+1]=='x')+
							(pg[i+1][j+1]=='x')+
							(pg[i+1][j]=='x')
							)

					elif not(size -1 - j) and i and not(i == size-1):
						# NOTE: right
						pg[i][j] = str(
							(pg[i-1][j-1]=='x')+
							(pg[i-1][j]=='x')+
							(pg[i+1][j]=='x')+
							(pg[i+1][j-1]=='x')+
							(pg[i][j-1]=='x')
							)

					elif (i == 0 and j ==0):
						# NOTE: left top
						pg[i][j] = str(
							(pg[i][j+1]=='x')+
							(pg[i+1][j+1]=='x')+
							(pg[i+1][j]=='x')
							)

					elif (i == size - 1 and j ==0):
						# NOTE: left bottom
						pg[i][j] = str(
							(pg[i-1][j]=='x')+
							(pg[i-1][j+1]=='x')+
							(pg[i][j+1]=='x')
							)

					elif (i == 0 and j == size - 1):
						# NOTE: top right
						pg[i][j] = str(
							(pg[i+1][j]=='x')+
							(pg[i+1][j-1]=='x')+
							(pg[i][j-1]=='x')
							)

					elif (i == size - 1 and j == size - 1):
						# NOTE: right bottom
						pg[i][j] = str(
						(pg[i-1][j-1]=='x')+
						(pg[i-1][j]=='x')+
						(pg[i][j-1]=='x')
						)

					elif pg[i][j] != 'x':
						# NOTE: another
						pg[i][j] = str(
						(pg[i-1][j-1]=='x')+
						(pg[i-1][j]=='x')+
						(pg[i-1][j+1]=='x')+
						(pg[i][j+1]=='x')+
						(pg[i+1][j+1]=='x')+
						(pg[i+1][j]=='x')+
						(pg[i+1][j-1]=='x')+
						(pg[i][j-1]=='x')
						)
				if pg[i][j] == '0':
					# NOTE: empty
					pg[i][j] = ' '
