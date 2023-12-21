package router

import (
	"github.com/go-chi/chi/v5"
	"github.com/gongg21/Saffire/src/backend/routes"
)

func Setup() chi.Router {
	r := chi.NewRouter()
	setUpRoutes(r)
	return r
}

func setUpRoutes(r chi.Router) {
	r.Group(routes.GetRoutes())
}
