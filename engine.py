from list import gameSession

def game(size):
	pg = ''

	for i in range(10):
		pg+=str(gameSession().first(size))+'h'
	return pg