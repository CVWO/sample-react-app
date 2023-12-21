package users

import (
	"github.com/gongg21/Saffire/src/backend/database"
	"github.com/gongg21/Saffire/src/backend/models"
)

func List(db *database.Database) ([]models.User, error) {
	users := []models.User{
		{
			ID:   1,
			Name: "CVWO",
		},
	}
	return users, nil
}
