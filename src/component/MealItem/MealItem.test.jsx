import React from 'react';
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {MealItem} from "./MealItem";

describe('Карточка блюда отрисовывается правильно', () => {
    const mockProps = {
        idMeal: '53049',
        strMeal : 'Apam balik',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/adxcbq1619787919.jpg'
    }
    const renderCategoryItem = () => {
        render(
            <MemoryRouter>
                <MealItem {...mockProps}></MealItem>
            </MemoryRouter>
        )
    }
    test('Картинка правильная', () => {
            renderCategoryItem()
            const imgElement = screen.getByAltText(/Apam balik/i)
            expect(imgElement).toHaveAttribute('src', 'https://www.themealdb.com/images/media/meals/adxcbq1619787919.jpg')

        }
    )
    test('Название правильное', () => {
            renderCategoryItem()
            const titleElement = screen.getByText(/Apam balik/i);
            expect(titleElement).toBeInTheDocument();
        }
    )
})
