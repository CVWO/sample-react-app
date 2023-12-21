package database

type Database struct {
}

func GetDB() (*Database, error) {
	return &Database{}, nil
}
