// recipe.service.ts
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  // Define some hardcoded recipes
  private recipes: Recipe[] = [
    { id: 0, 
      title: 'Bacalhau à Moda de Viana', 
      description: 'Esta receita é feita com postas de bacalhau do lombo dessalgadas, envolvidas em folhas de couve lombarda.', 
      ingredients: [
        'Lombo de bacalhau demolhado', 
        'Azeite', 
        'Cebola', 
        'Alho', 
        'Batata para cozer', 
        'Sal', 
        'Brócolos', 
        'Azeitona preta', 
        'Salsa fresca'
      ], 
      quantities: [
        '900 g', 
        '8 c. de sopa', 
        '200 g', 
        '3 dente', 
        '900 g', 
        '2 c. de chá', 
        '600 g', 
        '12 unid.', 
        '1 q.b.'
      ],
      preparation:`
      Passo 1
      Coloque os lombos de bacalhau num tacho e deite por cima água a ferver. Deixe de molho uns momentos apenas, para ajudar a abrir lascas. Escorra imediatamente e enxugue num pano.

      Passo 2
      Aqueça uma colher de sopa de azeite num grelhador e coloque o bacalhau por cima. Deixe cozinhar durante cerca de 15 a 20 minutos. Este processo também pode ser feito nas brasas.
      
      Passo 3
      Enquanto o bacalhau assa, deite o restante azeite num tacho, junte as cebolas e dois dentes de alho descascados e cortados em fatias e deixe cozinhar tapado em lume brando para que a cebola não aloure e fique apenas “estalada”.
      
      Passo 4
      Coza as batatas em água temperada com uma colher de chá de sal. Deixe cozer por cerca de 15 minutos ou até estarem tenras.
      
      Passo 5
      Noutra panela, coza os brócolos em água a ferver temperada com o restante sal.
      
      Passo 6
      Quando o bacalhau estiver assado, coloque na travessa ou num prato de barro regional e deite sobre ele a cebolada e o respetivo azeite. Em redor disponha as batatas cozidas, partidas em rodelas e os brócolos.
      
      Passo 7
      Coloque por cima as azeitonas e polvilhe com salsa picada.
      `
    },
    { id: 1,
      title: 'Rojões à Moda do Minho',
      description: 'Os Rojões à moda do Minho são um prato típico e delicioso da cozinha portuguesa',
      ingredients: [
        'Carne de porco (perna, barriga e entremeada)',
        'Sal',
        'Alho',
        'Pimentão-doce',
        'Cominhos',
        'Coloral',
        'Vinho branco',
        'Banha',
        'Louros',
        'Piri-piri',
        'Batatas'
      ],
      quantities: [
        '1 kg',
        'q.b.',
        '4 dentes',
        '1 c. de sopa',
        '1 c. de sopa',
        '1 c. de sopa',
        '1 dl',
        'q.b.',
        'q.b.',
        'q.b.',
        'q.b.'
      ],
      preparation: `
        Passo 1
        Corte a carne de porco em cubos e tempere com sal, alho picado, pimentão-doce, cominhos, coloral, vinho branco, louro e piri-piri. Deixe marinar durante pelo menos 2 horas.
    
        Passo 2
        Num tacho, derreta a banha e frite a carne até ficar dourada e tenra.
    
        Passo 3
        Entretanto, lave bem as batatas com casca e corte-as em cubos pequenos.
    
        Passo 4
        Numa frigideira, frite as batatas em óleo bem quente até ficarem douradas e crocantes.
    
        Passo 5
        Sirva os rojões acompanhados das batatas fritas.
    
        Bom apetite!
      `
    },
    { id: 2,
      title: 'Pescada à Vianense',
      description: 'Uma deliciosa receita de pescada à moda de Viana do Castelo, com um sabor tradicional e reconfortante.',
      ingredients: [
        'Postas de pescada',
        'Cebolas',
        'Dentes de alho',
        'Tomates maduros',
        'Pimento vermelho',
        'Azeite',
        'Vinho branco',
        'Água',
        'Sal e pimenta',
        'Salsa picada'
      ],
      quantities: [
        '4 unid.',
        '2 unid.',
        '2 unid.',
        '2 unid.',
        '1 unid.',
        '1 dl',
        '100 ml',
        '100 ml',
        'q.b.',
        'q.b.'
      ],
      preparation: `
        Passo 1
        Num tacho, coloque o azeite, as cebolas picadas, os alhos picados, o tomate sem pele e sementes cortado em pedaços, e o pimento vermelho cortado em tiras. Leve ao lume e deixe refogar um pouco.
    
        Passo 2
        Adicione as postas de pescada, o vinho branco, a água, o sal e a pimenta. Deixe cozinhar em lume médio por cerca de 20 minutos, virando as postas a meio do tempo.
    
        Passo 3
        Retire as postas para um prato de servir e regue com o molho. Polvilhe com salsa picada antes de servir.
    
        Passo 4
        Sirva acompanhado de batatas cozidas e legumes a gosto.
    
        Bom apetite!
      `
    },
    {
      id: 3,
      title: 'Santola Recheada',
      description: 'Uma entrada deliciosa e sofisticada, perfeita para surpreender os convidados em ocasiões especiais.',
      ingredients: [
        'Santola',
        '150 g de miolo de camarão',
        'Ovos cozidos',
        'Cebola',
        'Dentes de alho',
        'Pimento vermelho',
        'Salsa picada',
        'Azeite',
        'Sal e pimenta',
        'Pão ralado'
      ],
      quantities: [
        '1 unid.',
        '150 g',
        '2 unid.',
        '1 unid.',
        '2 unid.',
        '1 unid.',
        'q.b.',
        'q.b.',
        'q.b.',
        'q.b.'
      ],
      preparation: `
        Passo 1
        Coza a santola em água com sal por cerca de 20 minutos. Retire a santola, deixe arrefecer e abra-a ao meio.
    
        Passo 2
        Retire todo o miolo e reserve. Pique a cebola, os alhos e o pimento e refogue num pouco de azeite. Junte o miolo da santola e o miolo de camarão picado. Deixe cozinhar por uns minutos.
    
        Passo 3
        Num recipiente, misture este preparado com os ovos cozidos picados e salsa picada. Tempere com sal e pimenta.
    
        Passo 4
        Recheie a carapaça da santola com este preparado, polvilhe com pão ralado e leve ao forno pré-aquecido a 180°C por cerca de 20 minutos, ou até dourar.
    
        Passo 5
        Sirva a santola recheada ainda quente, decorada a gosto.
    
        Bom apetite!
      `
    },
    {
      id: 4,
      title: 'Torta de Viana',
      description: 'Uma sobremesa tradicional da região de Viana do Castelo, esta torta é um verdadeiro deleite para os apreciadores de doces.',
      ingredients: [
        'Ovos',
        'Açúcar',
        'Farinha de trigo',
        'Fermento em pó',
        'Natas',
        'Açúcar em pó',
        'Manteiga'
      ],
      quantities: [
        '6 unid.',
        '150 g',
        '100 g',
        '1 c. de chá',
        '200 ml',
        'q.b.',
        'q.b.'
      ],
      preparation: `
        Passo 1
        Pré-aqueça o forno a 180°C. Unte uma forma retangular com manteiga e forre-a com papel vegetal, também untado com manteiga.
    
        Passo 2
        Separe as gemas das claras. Bata as claras em castelo e reserve.
    
        Passo 3
        Noutra taça, bata as gemas com o açúcar até obter um creme esbranquiçado e fofo. Adicione as natas e misture bem.
    
        Passo 4
        Acrescente a farinha peneirada com o fermento, envolvendo delicadamente.
    
        Passo 5
        Por fim, adicione as claras em castelo, envolvendo cuidadosamente para não perderem o volume.
    
        Passo 6
        Verta a massa na forma preparada e leve ao forno por aproximadamente 15 minutos, ou até estar cozida e dourada.
    
        Passo 7
        Retire do forno e deixe arrefecer por alguns minutos. Desenforme sobre um pano polvilhado com açúcar em pó e enrole com cuidado.
    
        Passo 8
        Deixe arrefecer completamente antes de servir. Polvilhe com mais açúcar em pó antes de servir, se desejar.
    
        Bom apetite!
      `
    }
    // Add more recipes here...
  ];

  constructor() {}

  // Get all recipes
  getAllRecipes(): Recipe[] {
    return this.recipes;
  }

  // Get a recipe by ID
  getRecipeById(id: number): Recipe | undefined {
    return this.recipes.find(recipe => recipe.id === id);
  }
}
