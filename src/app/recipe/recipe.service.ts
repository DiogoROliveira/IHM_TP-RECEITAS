import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  // Define some hardcoded recipes
  private recipes: Recipe[] = [
    { id: 1, 
      title: 'Bacalhau à Moda de Viana', 
      description: 'Esta receita é feita com postas de bacalhau do lombo dessalgadas, envolvidas em folhas de couve lombarda.', 
      ingredients: [
        {name: 'Lombo de bacalhau demolhado',quantity: '900 g'}, 
        {name: 'Azeite', quantity: '8 c. de sopa'},
        {name: 'Cebola', quantity: '200 g'},
        {name: 'Alho', quantity: '3 dente'},
        {name: 'Batata para cozer', quantity: '900 g'},
        {name: 'Sal', quantity: '2 c. de chá'},
        {name: 'Brócolos', quantity: '600 g'},
        {name: 'Azeitona preta', quantity: '12 unid.'},
        {name: 'Salsa fresca', quantity: '1 q.b.'}
      ], 
      preparation:[
      
      '-- Coloque os lombos de bacalhau num tacho e deite por cima água a ferver. Deixe de molho uns momentos apenas, para ajudar a abrir lascas. Escorra imediatamente e enxugue num pano.',

      '-- Aqueça uma colher de sopa de azeite num grelhador e coloque o bacalhau por cima. Deixe cozinhar durante cerca de 15 a 20 minutos. Este processo também pode ser feito nas brasas.',
      
      '-- Enquanto o bacalhau assa, deite o restante azeite num tacho, junte as cebolas e dois dentes de alho descascados e cortados em fatias e deixe cozinhar tapado em lume brando para que a cebola não aloure e fique apenas “estalada”.',
      
      '-- Coza as batatas em água temperada com uma colher de chá de sal. Deixe cozer por cerca de 15 minutos ou até estarem tenras.',
      
      '-- Noutra panela, coza os brócolos em água a ferver temperada com o restante sal.',
      
      '-- Quando o bacalhau estiver assado, coloque na travessa ou num prato de barro regional e deite sobre ele a cebolada e o respetivo azeite. Em redor disponha as batatas cozidas, partidas em rodelas e os brócolos.',
      
      '-- Coloque por cima as azeitonas e polvilhe com salsa picada.',

      'Bom apetite!'
      ]
    },
    { id: 2,
      title: 'Rojões à Moda do Minho',
      description: 'Os Rojões à moda do Minho são um prato típico e delicioso da cozinha portuguesa',
      ingredients: [
        {name: 'Carne de porco (perna, barriga e entremeada)', quantity: '1 kg'},
        {name: 'Sal', quantity: 'q.b.'},
        {name: 'Alho', quantity: '4 dente'},
        {name: 'Pimentão-doce', quantity: '1 c. de sopa'},
        {name: 'Cominhos', quantity: '1 c. de sopa.'},
        {name: 'Coloral', quantity: '1 c. de sopa.'},
        {name: 'Vinho branco', quantity: '1 dl'},
        {name: 'Banha', quantity: 'q.b.'},
        {name: 'Louros', quantity: 'q.b.'},
        {name: 'Piri-piri', quantity: 'q.b.'},
        {name: 'Batatas', quantity: 'q.b.'}
      ],
      preparation: [
       
        'Corte a carne de porco em cubos e tempere com sal, alho picado, pimentão-doce, cominhos, coloral, vinho branco, louro e piri-piri. Deixe marinar durante pelo menos 2 horas.',
  
        'Num tacho, derreta a banha e frite a carne até ficar dourada e tenra.',
    
        'Entretanto, lave bem as batatas com casca e corte-as em cubos pequenos.',

        'Numa frigideira, frite as batatas em óleo bem quente até ficarem douradas e crocantes.',
    
        'Sirva os rojões acompanhados das batatas fritas.',
    
        'Bom apetite!',
      ]
    },
    { id: 3,
      title: 'Pescada à Vianense',
      description: 'Uma deliciosa receita de pescada à moda de Viana do Castelo, com um sabor tradicional e reconfortante.',
      ingredients: [
        {name: 'Pescada', quantity: '4 unid.'},
        {name: 'Cebolas', quantity: '2 unid.'},
        {name: 'Dentes de alho', quantity: '2 unid.'},
        {name: 'Tomates maduros', quantity: '2 unid.'},
        {name: 'Pimento vermelho', quantity: '1 unid.'},
        {name: 'Azeite', quantity: '1 dl'},
        {name: 'Vinho branco', quantity: '100 ml'},
        {name: 'Água', quantity: '100 ml'},
        {name: 'Sal e pimenta', quantity: 'q.b.'},
        {name: 'Salsa picada', quantity: 'q.b.'},
      ],
      preparation: [
        
        'Num tacho, coloque o azeite, as cebolas picadas, os alhos picados, o tomate sem pele e sementes cortado em pedaços, e o pimento vermelho cortado em tiras. Leve ao lume e deixe refogar um pouco.',
    
        'Adicione as postas de pescada, o vinho branco, a água, o sal e a pimenta. Deixe cozinhar em lume médio por cerca de 20 minutos, virando as postas a meio do tempo.',

        'Retire as postas para um prato de servir e regue com o molho. Polvilhe com salsa picada antes de servir.',
    
        'Sirva acompanhado de batatas cozidas e legumes a gosto.',
    
        'Bom apetite!',
      ]
    },
    {
      id: 4,
      title: 'Santola Recheada',
      description: 'Uma entrada deliciosa e sofisticada, perfeita para surpreender os convidados em ocasiões especiais.',
      ingredients: [
        {name: 'Santola', quantity: '1 unid.'},
        {name: 'Miolo de camarão', quantity: '150 g'},
        {name: 'Ovos cozidos', quantity: '2 unid.'},
        {name: 'Cebola', quantity: '1 unid.'},
        {name: 'Alho', quantity: '2 dente'},
        {name: 'Pimento vermelho', quantity: '1 unid.'},
        {name: 'Salsa picada', quantity: 'q.b.'},
        {name: 'Azeite', quantity: 'q.b.'},
        {name: 'Sal e pimenta', quantity: 'q.b.'},
        {name: 'Pão ralado', quantity: 'q.b.'}
      ],
      preparation:[
        
        'Coza a santola em água com sal por cerca de 20 minutos. Retire a santola, deixe arrefecer e abra-a ao meio.',
    
        'Retire todo o miolo e reserve. Pique a cebola, os alhos e o pimento e refogue num pouco de azeite. Junte o miolo da santola e o miolo de camarão picado. Deixe cozinhar por uns minutos.',
    
        'Num recipiente, misture este preparado com os ovos cozidos picados e salsa picada. Tempere com sal e pimenta.',
    
        'Recheie a carapaça da santola com este preparado, polvilhe com pão ralado e leve ao forno pré-aquecido a 180°C por cerca de 20 minutos, ou até dourar.',
    
        'Sirva a santola recheada ainda quente, decorada a gosto.',

        'Bom apetite!',
      ]
    },
    {
      id: 5,
      title: 'Torta de Viana',
      description: 'Uma sobremesa tradicional da região de Viana do Castelo, esta torta é um verdadeiro deleite para os apreciadores de doces.',
      ingredients: [
        {name: 'Ovos', quantity: '6 unid.'},
        {name: 'Açúcar', quantity: '150 g'},
        {name: 'Farinha de trigo', quantity: '100 g'},
        {name: 'Fermento em pó', quantity: '1 c. de chá'},
        {name: 'Natas', quantity: '200 ml'},
        {name: 'Açúcar em pó', quantity: 'q.b.'},
        {name: 'Manteiga', quantity: 'q.b.'}
      ],
      preparation: [
        
        'Pré-aqueça o forno a 180°C. Unte uma forma retangular com manteiga e forre-a com papel vegetal, também untado com manteiga.',
    
        'Separe as gemas das claras. Bata as claras em castelo e reserve.',
    
        'Noutra taça, bata as gemas com o açúcar até obter um creme esbranquiçado e fofo. Adicione as natas e misture bem.',
    
        'Acrescente a farinha peneirada com o fermento, envolvendo delicadamente.',
    
        'Por fim, adicione as claras em castelo, envolvendo cuidadosamente para não perderem o volume.',
    
        'Verta a massa na forma preparada e leve ao forno por aproximadamente 15 minutos, ou até estar cozida e dourada.',
    
        'Retire do forno e deixe arrefecer por alguns minutos. Desenforme sobre um pano polvilhado com açúcar em pó e enrole com cuidado.',
    
        'Deixe arrefecer completamente antes de servir. Polvilhe com mais açúcar em pó antes de servir, se desejar.',
    
        'Bom apetite!',

      ]
    }
    // Add more recipes here...
  ];

  constructor() {}

 
  getAllRecipes(): Recipe[] {
    return this.recipes;
  }

  getRecipeById(id: number): Recipe | undefined {
    return this.recipes.find(recipe => recipe.id === id);
  }
}
